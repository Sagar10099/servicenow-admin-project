# Scenario 2 — P1 Approval Workflow

## REAL-TIME SCENARIO

When Priority becomes **P1 (Critical)**:

- Manager approval is required
- Before major actions happen

This is used in real banking and enterprise projects for:

- Emergency Changes
- Critical Outages
- Major Incident Declaration
- High-Risk Production Actions

---

# REAL PROJECT FLOW

```text
P1 Incident Created
        ↓
Manager Approval Requested
        ↓
Manager Approves
        ↓
Major Incident Process Starts
```

---

# OBJECTIVE

Automatically trigger approval when:

```text
Priority = 1 - Critical
```

And send approval request to:

```text
Manager / Specific User
```

---

# TOOLS & CONCEPTS USED

- Flow Designer
- Ask For Approval Action
- Incident Table
- Approval Workflow
- Update Record Action
- Conditional Logic
- Enterprise Automation

---

# IMPLEMENTATION STEPS

## Step 1 — Create Flow

Navigate to:

```text
Flow Designer → New → Flow
```

Fill details:

| Field | Value |
|---|---|
| Flow Name | P1 Approval Flow |
| Application | Global |

---

## Step 2 — Configure Trigger

Table:

```text
Incident [incident]
```

Trigger Type:

```text
Created or Updated
```

Condition:

| Field | Operator | Value |
|---|---|---|
| Priority | is | 1 - Critical |

---

## Step 3 — Add Approval Action

Add Action:

```text
Ask For Approval
```

Configuration:

| Field | Value |
|---|---|
| Record | Trigger → Incident Record |
| Approvers | Specific User / Manager |
| Wait For | Anyone approves |

---

## Step 4 — Add Approval Logic

Add:

```text
Flow Logic → If
```

Condition:

```text
Approval State = Approved
```

---

## Step 5 — Approved Branch

Action:

```text
Update Record
```

Update:

| Field | Value |
|---|---|
| State | In Progress |

OR

| Field | Value |
|---|---|
| Major Incident State | Accepted |

---

## Step 6 — Rejected Branch

Update Record:

| Field | Value |
|---|---|
| State | On Hold |

Work Notes:

```text
Manager rejected P1 approval.
```

---

# FLOW DESIGN

```text
P1 Incident Created
        ↓
Approval Request Generated
        ↓
Manager Approves / Rejects
        ↓
Incident Updated Automatically
```

---

# TESTING

Create Incident:

| Field | Value |
|---|---|
| Priority | 1 - Critical |

Expected Result:

- Approval automatically generated
- Approval record created
- Approver receives request
- Flow waits for approval
- Incident updated after approval

---

# APPROVAL TABLE

Approvals stored in:

```text
sysapproval_approver
```

---

# HOW TO VERIFY

Navigate to:

```text
Approvals → My Approvals
```

OR

```text
sysapproval_approver.list
```

Approve or Reject request.

---

# BUSINESS BENEFITS

- Prevents unauthorized critical actions
- Ensures management validation
- Reduces production risk
- Automates approval process
- Improves incident governance

---

# REAL ENTERPRISE USE CASE

```text
P1 Incident
      ↓
Incident Manager Approval
      ↓
Bridge Call Initiated
      ↓
Emergency Change Approval
      ↓
Vendor Escalation
      ↓
Resolution & RCA
```

---

# INTERVIEW EXPLANATION

> Implemented a P1 Approval Workflow using Flow Designer.
> When incident priority becomes Critical (P1),
> approval is automatically triggered for the manager before major incident activities proceed.
> Used Ask For Approval action, conditional flow logic, and automated incident updates.

---

# IMPORTANT INTERVIEW QUESTIONS

## Q1: Why use Flow Designer instead of Workflow?

### Answer:

Flow Designer is modern, low-code, easier to maintain, reusable, and officially recommended by ServiceNow.

---

## Q2: What happens after approval?

### Answer:

Major incident activities continue such as:

- Escalations
- Notifications
- SLA tracking
- Bridge calls
- Incident handling

---

## Q3: Which table stores approval records?

### Answer:

```text
sysapproval_approver
```

---

# SKILLS DEMONSTRATED

- ServiceNow Flow Designer
- Incident Management
- Approval Automation
- Conditional Workflow Logic
- Enterprise Process Automation
- Real-Time ITSM Scenario Handling

---

# AUTHOR

Sagar Pachpande  
ServiceNow Learner & Developer

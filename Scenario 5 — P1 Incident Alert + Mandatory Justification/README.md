P1 Incident Alert + Mandatory Justification
📌 Scenario Overview

This real-time ServiceNow administration scenario ensures proper governance for P1 (Critical) incidents.

Whenever an Incident Priority becomes P1 - Critical:

User receives an alert message
Business justification becomes mandatory
Incident cannot be submitted without proper justification

This type of implementation is commonly used in enterprise production environments to avoid unnecessary P1 escalations.

🎯 Objective

To implement:

✅ Real-time alert using Client Script
✅ Mandatory justification using UI Policy
✅ Better incident governance
✅ Controlled P1 escalation process

🛠 Technologies Used
ServiceNow ITSM
Client Script
UI Policy
UI Policy Actions
📂 Components Used
Component	Purpose
UI Policy	Make justification field mandatory
UI Policy Action	Control field visibility & mandatory state
Client Script	Display real-time alert message
📌 Business Requirement

If Incident Priority becomes:

1 - Critical

Then:

Show warning message to user
Make "P1 Justification" field mandatory
Prevent submission without justification
⚙️ Implementation Steps
Step 1 — Create Custom Field

Field Details:

Label	Name	Type
P1 Justification	u_p1_justification	Multi Line Text

Navigation:

Incident → Configure → Form Layout
Step 2 — Create UI Policy

Navigation:

System UI → UI Policies

Configuration:

Field	Value
Table	Incident
Condition	Priority = 1 - Critical
Active	True
Step 3 — Create UI Policy Action

Field Configuration:

Field Name	Mandatory	Visible
P1 Justification	True	True
Step 4 — Create Client Script

Navigation:

System Definition → Client Scripts

Configuration:

Field	Value
Type	onChange
Field Name	priority
Table	Incident
💻 Client Script Code
function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading || newValue == '') {
        return;
    }

    // If Priority becomes P1
    if (newValue == '1') {

        g_form.addErrorMessage(
            'P1 Incident detected! Please provide proper business justification.'
        );

    }
}
✅ Expected Result

When Priority changes to:

1 - Critical

System behavior:

✅ Alert message displayed
✅ Justification field mandatory
✅ User cannot submit without justification

🌍 Real-Time Use Case

In enterprise environments, P1 incidents trigger:

Major escalations
Management notifications
SLA impact
Business outage procedures

To avoid false P1 incidents, organizations enforce mandatory business justification before allowing ticket submission.

🎓 Key Learnings
UI Policy

Used for:

Mandatory fields
Visibility control
Read-only behavior
Client Script

Used for:

Real-time form validation
User alerts
Dynamic field behavior
🔥 Future Enhancements

Possible advanced implementations:

Auto email notification to manager
Major Incident auto creation
Approval workflow for P1
SLA breach alerts
MS Teams / Slack notifications
🎤 Interview Explanation

“I implemented a real-time P1 governance solution in ServiceNow where users were forced to provide business justification whenever an incident priority became Critical (P1).

I used UI Policy for mandatory field enforcement and Client Script for real-time alert messaging.

This helped reduce false escalations and improved incident governance.”

📌 Outcome

✅ Improved governance
✅ Reduced unnecessary P1 incidents
✅ Better audit compliance
✅ Enhanced operational control

🏷 Tags

ServiceNow ITSM Incident Management UI Policy Client Script ServiceNow Admin Real-Time Scenario P1 Incident

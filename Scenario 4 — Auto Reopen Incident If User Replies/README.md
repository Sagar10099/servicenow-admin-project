Scenario 10 — Auto Reopen Incident If User Replies
Project Overview

This project demonstrates a real-time Incident Management automation in ServiceNow where a resolved incident is automatically reopened when the customer replies using Additional Comments.

This is a common production support scenario used in ITSM projects to ensure unresolved issues are properly tracked and handled.

Business Requirement

In real-time support environments:

Support team resolves an incident
Incident state becomes Resolved
Customer later replies:

“Issue still not fixed”

Instead of creating a new incident manually, the system should:

✅ Automatically reopen the incident
✅ Change state back to In Progress
✅ Notify support team through work notes

Objective

Automate incident reopening when:

Incident is in Resolved state
Customer updates Additional Comments
Comment is not added by assigned support engineer
Technologies Used
Technology	Purpose
JavaScript	Business Rule scripting
ServiceNow Business Rule	Automation logic
Incident Management	ITSM process
Work Notes	Internal tracking
Business Rule Configuration
Field	Value
Table	Incident
When	Before Update
Advanced	True
Condition	State is Resolved
Script Used
(function executeRule(current, previous) {

    // Run only if incident is resolved
    if (current.state == 6 && current.comments.changes()) {

        // Customer replied
        if (gs.getUserID() != current.assigned_to) {

            // Reopen incident
            current.state = 2;

            // Add work note
            current.work_notes =
            'Incident automatically reopened because customer responded.';

        }
    }

})(current, previous);
Script Explanation
1. Check Incident State
current.state == 6

Ensures the script runs only when Incident is in Resolved state.

2. Detect Customer Reply
current.comments.changes()

Checks whether Additional Comments were updated.

3. Validate User
gs.getUserID() != current.assigned_to

Prevents incident reopening when support engineer updates comments.

Only customer responses trigger reopening.

4. Reopen Incident
current.state = 2;

Changes Incident state from:

Resolved → In Progress

5. Add Work Note
current.work_notes

Adds internal tracking note for support team visibility.

Real-Time Workflow
Incident Resolved
       ↓
Customer replies in Additional Comments
       ↓
Business Rule triggers
       ↓
System validates user
       ↓
Incident automatically reopens
       ↓
State changes to In Progress
       ↓
Work note added
Key Concepts Learned
ServiceNow Business Rules
Incident Lifecycle Automation
Real-time ITSM Scenarios
comments.changes()
gs.getUserID()
State Management
Work Notes Handling
Production Support Logic
Interview Explanation

“I implemented an Auto Reopen Incident solution in ServiceNow using a Before Update Business Rule. Whenever a customer replied on a resolved incident through Additional Comments, the incident automatically changed back to In Progress state. I used comments.changes() to detect customer replies and gs.getUserID() validation to prevent reopening when support engineers updated comments.”

Outcome

✅ Reduced manual effort for support team
✅ Improved incident lifecycle tracking
✅ Faster response handling
✅ Better customer support experience
✅ Real-time production support automation

Author

Sagar Pachpande
System Engineer | ServiceNow Learner | ITSM & ITOM Enthusiast

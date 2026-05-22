Auto Close Resolved Incidents After 7 Days — ServiceNow
📌 Project Overview

This project automates the incident lifecycle management process in ServiceNow by automatically closing incidents that remain in the Resolved state for more than 7 days.

A Scheduled Script Execution (Scheduled Job) was implemented to run daily in the background and identify resolved incidents older than 7 days. The script then automatically updates the incident state to Closed and adds appropriate work notes and close notes.

🎯 Objective

To reduce manual effort and maintain proper incident hygiene by automatically closing stale resolved incidents after a defined duration.

🛠 Technologies / Modules Used
ServiceNow ITSM
Scheduled Script Execution
GlideRecord
Server-side JavaScript
Incident Management
Background Automation
⚙ Business Requirement
Scenario

In real-time ITSM environments:

Users resolve incidents
Tickets remain in "Resolved" state for confirmation
After a few days, unresolved/resolved tickets should automatically close
This prevents ticket backlog and improves lifecycle management
✅ Implemented Solution

Created a Scheduled Job that:

Runs daily
Fetches all incidents:
State = Resolved
Resolved before 7 days
Automatically updates:
State → Closed
Close Notes
Work Notes
📜 Script Used
var gr = new GlideRecord('incident');

gr.addQuery('state', 6); // Resolved

// Resolved before 7 days
gr.addQuery('resolved_at', '<=', gs.daysAgoStart(7));

gr.query();

while(gr.next()) {

    gr.state = 7; // Closed

    gr.close_notes = 'Incident automatically closed after 7 days of resolution';

    gr.work_notes = 'Auto closed by scheduled job';

    gr.update();
}
🔍 Script Explanation
GlideRecord
var gr = new GlideRecord('incident');

Used to access Incident table records.

Query for Resolved Incidents
gr.addQuery('state', 6);

Fetches incidents with state = Resolved.

Date Condition
gs.daysAgoStart(7)

Returns date/time from 7 days ago.

Auto Close Logic
gr.state = 7;

Updates incident state to Closed.

🧪 Testing Performed
Test Steps
Created test incidents
Changed state to Resolved
Modified Resolved At date older than 7 days
Executed Scheduled Job manually using:
Execute Now
Verified:
Incident moved to Closed state
Work notes updated
Close notes updated
✅ Outcome

Successfully automated incident closure process using Scheduled Script Execution.

Benefits achieved:

Reduced manual effort
Improved ticket lifecycle management
Prevented stale resolved incidents
Improved operational efficiency
💡 Real-Time Use Case

This automation is commonly used in enterprise ITSM environments where incidents should not remain indefinitely in the Resolved state.

Example:

Banking
Healthcare
Telecom
Enterprise Support Projects
🎤 Interview Explanation
Question:
“Explain one automation you implemented in ServiceNow.”
Answer:

“I implemented a Scheduled Script Execution in ServiceNow to automatically close resolved incidents after 7 days. The job runs daily, fetches incidents in resolved state older than 7 days using GlideRecord and date-based queries, then updates the incident state to Closed along with work notes and close notes. This automation helps maintain proper incident lifecycle management and reduces manual effort.”

🔥 Key Concepts Learned
Scheduled Jobs
Scheduled Script Execution
GlideRecord
Server-side Scripting
Date-based Queries
Background Automation
Incident Lifecycle Management
📁 GitHub Repository Structure
Auto-Close-Resolved-Incidents/
│
├── README.md
├── Script.js
└── Screenshots/
🚀 Future Enhancements
Send notification before auto closure
Auto reopen logic if user responds
Configurable closure duration
Logging and error handling
👨‍💻 Developed By

Sagar Pachpande
ServiceNow Developer / System Engineer
Cloudzest

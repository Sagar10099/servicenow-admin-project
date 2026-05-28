# Auto Assign Incident Based on Category

## Project Overview

This ServiceNow project automatically assigns incidents to different assignment groups based on the selected category.

---

## Technologies Used

- ServiceNow
- Business Rules
- GlideRecord
- Incident Management

---

## Scenario

| Category | Assignment Group |
|---|---|
| Hardware | Hardware Team |
| Software | App Support Team |
| Network | Network Team |

---

## Business Rule Details

| Field | Value |
|---|---|
| Table | Incident |
| When | Before |
| Insert | True |
| Update | True |

---

## Script

```javascript
(function executeRule(current, previous) {

    var groupName = '';

    if (current.category == 'hardware') {
        groupName = 'Hardware Team';
    }
    else if (current.category == 'software') {
        groupName = 'App Support Team';
    }
    else if (current.category == 'network') {
        groupName = 'Network Team';
    }

    if (groupName) {

        var grp = new GlideRecord('sys_user_group');
        grp.addQuery('name', groupName);
        grp.query();

        if (grp.next()) {
            current.assignment_group = grp.sys_id;
        }
    }

})(current, previous);
```

---

## Testing

### Hardware Incident
Assignment Group automatically changed to Hardware Team.

### Software Incident
Assignment Group automatically changed to App Support Team.

### Network Incident
Assignment Group automatically changed to Network Team.

---

## Learning Outcome

- Business Rules
- GlideRecord
- Assignment Groups
- Server-side scripting
- Incident automation

---

## Author

Sagar Pachpande

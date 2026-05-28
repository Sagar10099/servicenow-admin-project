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

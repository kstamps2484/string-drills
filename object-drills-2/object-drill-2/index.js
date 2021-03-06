var studentData = [
    {
        name: 'Tim',
        status: 'Current student',
        course: 'Biology'
    },
    {
        name: 'Sue',
        status: 'Withdrawn',
        course: 'Mathematics'
    },
    {
        name: 'Liz',
        status: 'On leave',
        course: 'Computer science'
    }
];

function enrollInSummerSchool(students) {
    return students.map(function(student) {
        return {
            name: student.name,
            status: 'In Summer School',
            course: student.course
        }
    });
}


/* From here down, you are not expected to understand.... for now :)
 Nothing to see here!

 */

// tests


function testIt() {
    var testData = [
        {
            name: 'Burt',
            status: 'Playing hooky',
            course: 'Biology'
        },
        {
            name: 'Melanie',
            status: 'Sick',
            course: 'Mathematics'
        },
        {
            name: 'Leonard',
            status: 'AWOL',
            course: 'Computer science'
        }
    ];

    var results = enrollInSummerSchool(testData);

    if (!(results && results instanceof Array)) {
        console.error('FAILURE: `enrollSummerSchool` must return an array' + results);
        return
    }
    var allMatches = testData.every(function(student) {
            var match = results.find(function(_student) {
                    return (
                    _student.name === student.name &&
                    _student.course === student.course &&
                    _student.status === 'In Summer School'
                    );
                }
            );
            return match !== undefined;
        }
    );
    if (!allMatches) {
        console.error(
            'FAILURE: `enrollSummerSchool` should return ' +
            'original key/value pairs for each student, and ' +
            'update `status` to "In Summer school": ' + JSON.stringify(results));
    } else {
        console.info('SUCCESS: `enrollSummerSchool` is working');
    }
}

testIt();
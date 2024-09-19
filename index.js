const TOTAL_VACANCIES = 15;
const MAX_AGE = 60;
const MIN_AGE = 18;
const JOB_CRITERIA = [
    {
        designation: "Developer",
        minAge: 22,
        maxAge: 60
    },
    {
        designation: "Tester",
        minAge: 18,
        maxAge: 40
    }
];

const validateApplicant = (designation, age) => {
    const criteria = JOB_CRITERIA.find(c => c.designation === designation);
    if (criteria) {
        return age >= criteria.minAge && age <= criteria.maxAge;
    }
    return false;
};

let acceptedCount = 0;
let rejectedCount = 0;
let remainingVacancies = TOTAL_VACANCIES;

const processApplicant = (applicantId) => {
    const age = Math.floor(Math.random() * (MAX_AGE - MIN_AGE + 1)) + MIN_AGE;
    const designation = Math.random() > 0.5 ? 'Developer' : 'Tester';

    if (remainingVacancies > 0 && validateApplicant(designation, age)) {
        acceptedCount++;
        remainingVacancies--;
        console.log(`Applicant-${applicantId}: Accepted as ${designation}, Age: ${age}`);
    } else {
        rejectedCount++;
        console.log(`Applicant-${applicantId}: Rejected for ${designation}, Age: ${age}`);
    }

    console.log(`Remaining vacancies: ${remainingVacancies}`);
};

const runApplicationProcess = (totalApplicants) => {
    console.log(`Starting process with total vacancies: ${TOTAL_VACANCIES}`);

    for (let i = 1; i <= totalApplicants; i++) {
        processApplicant(i); // here i is the applicant id
    }

    console.log(`Total accepted applicants: ${TOTAL_VACANCIES - remainingVacancies}`);
    console.log(`Total rejected applicants: ${totalApplicants - (TOTAL_VACANCIES - remainingVacancies)}`);
    console.log(`Total applicants received: ${totalApplicants}`);
};

runApplicationProcess(40);

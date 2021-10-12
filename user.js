const userData = [{
    studentImg: "0001.jpg",
    studentID: "0001",
    branchName: "Chasara",
    courseName: "Microsoft Office",
    studentName: "Rokibul  Hasssan",
    guardianName: "MD Nannan Howlader",
    birthDate: "26 January 2002",
    gender: "Male",
    certificateNo: "0510 5793 57",
    studentPhoneNumber: "01906-909835",
    emergencyPhoneNumber: "01712-020461",
    address: "Nondolapur, Kutubpur 1421",
}];

function userTemplate(user) {
    return `

    <img src="${user.studentImg}" alt="">

    <div class="info">
        <P>Student ID: <span>${user.studentID}</span></P>
        <P>Date of Admission: <span>${user.dateOFadmission}</span></P>
        <P>Branch Name: <span>${user.branchName}</span></P>
    </div>

    <h2>Admission Form</h2>
    <P>Course Name: <span>${user.courseName}</span></P>
    <P>Student Name: <span>${user.studentName}</span></P>
    <P>Guardian Name: <span>${user.guardianName}</span></P>
    <P>Birth Date: <span>${user.birthDate}</span></P>
    <P>Gender: <span>${user.gender}</span></P>
    <P>Certificate No: <span>${user.certificateNo}</span></P>
    <P>Student Phone Number: <span>${user.studentPhoneNumber}</span></P>
    <P>Emergency Phone Number: <span>${user.emergencyPhoneNumber}</span></P>
    <P>Address: <span>${user.address}</span></P>    

  `;
}

document.getElementById("user").innerHTML = `
  ${userData.map(userTemplate).join("")}  
`;
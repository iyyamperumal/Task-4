let Resume= {
    "Name": "Iyyam perumal S",
    "Email": "sathishkannan140@gmail.com",
    "Mobie_no": "8682865855",
    "Date_of_Birth": "01-04-2000",
    "Nationality": "Indian",
    "Religion": "Hindu",
    "Marital_Status": "Unmarried",
    "Education": "B.E in Electronic and communication",
    "Experience": "Junior financial executive at Axcelerate RCM solution for 1 Year",
    "Skills": ["Javascript", "HTML", "CSS"],
    "Hobbies": ["Rubicks solving", "Listening music"],
    "Languages Known": ["English", "Tamil"],
    "Address": "31 A, Senthil Nagar, Palayamkottai, Tirunelveli-627002"
};
//For
for(let i=0; i<Resume["Languages Known"].length;i++){
    console.log(Resume["Languages Known"][i]);
    }
//For In
for (let x in Resume) {
    console.log(Resume[x]);
}
//For Of
for (let y of Resume.Skills) {
    console.log(Resume.Skills);
}
//ForEach
  Resume.Skills.forEach((x) => console.log(Resume["Languages Known"]));
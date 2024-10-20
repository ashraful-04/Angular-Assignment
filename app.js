var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    $scope.user = {
        name: "Ashraful Alom",
        intro: "I am a passionate learner and an aspiring developer.",
        about: "I am currently pursuing a Bachelor of Computer Applications (BCA) from Assam Down Town University in Guwahati. I am passionate about technology and constantly working to enhance my skills in programming and development.",
        hobbies: [, "Coding", "Playing Cricket", "Music"],
        town: "I come from Bongaigaon, a beautiful town in Assam. . My hometown has shaped many of my values and my sense of community.",
        townImage: "image1.png",  // Replace with actual image URL if available
        family: [
            { name: "Mizanur Rahman", relation: "Father" },
            { name: "Anowara Khatun", relation: "Mother" },
            { name: "Suhana Parbin", relation: "Sister" }
        ],
        education: "I completed my 10th grade from Montfort School, Bongaigaon, and my 12th grade from Sai Vikash Vidya Niketan, Guwahati. These formative years played a significant role in shaping my academic journey, providing me with a strong foundation in both academics and extracurricular activities. Currently, I am in my final year of BCA at Assam Down Town University. My college life has been a blend of academic learning, project development, and participating in various tech-related activities and hackathons. The atmosphere in college has allowed me to collaborate with my peers on several exciting projects.",
        achievements: ["First Place in Coding Competition", "100 % Attendance in every Semester", "Scholarship Holder"],
        contributions: "I have been actively involved in my community through various initiatives. Since 2022, I’ve participated in community service projects, helping to clean parks and organize local events. I also volunteer weekly at a local shelter, providing meals and support to those in need. Since 2020, I’ve organized fundraising events to aid local charities and non-profits. Additionally, I’ve been sharing resources and offering guidance to help others succeed since 2021. Through these efforts, I strive to make a positive impact in my community."
    };
});

// IT Professional Profile Object
let devProfile = {
  fullName: "Alice Johnson",
  age: 28,
  profession: "Full Stack Developer",
  skills: ["JavaScript", "Node.js", "React", "MongoDB"],
  isEmployed: true,
  contact: {
    email: "alice.johnson@example.com",
    location: "San Francisco"
  }
};

// Function to present the profile in English
function introduceProfile(profile) {
  let employmentStatus = profile.isEmployed ? "I am currently employed." : "I am currently looking for opportunities.";
  let skills = profile.skills.join(", ");
  return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${skills}. I live in ${profile.contact.location}. I am ${profile.age} years old. ${employmentStatus}`;
}

// Example usage
console.log(introduceProfile(devProfile));

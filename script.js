const form = document.getElementById("login-form");
const codeInput = document.getElementById("code");
const resultDiv = document.getElementById("result");

const secretNames = [
  "Saheli",
  "Annaya",
  "Srestha",
  "Shreya",
  "Anindita",
  "Puja",
  "Meghna",
  "Sanyukta",
  "Bipasa",
  "Riya",
  "Tania",
  "Anushka",
  "Ishita",
  "Nikita",
  "Sakshi",
  "Aparna",
  "Neha",
  "Sweta",
  "Sanjana",
  "Anjali",
  "Priya",
  "Tanisha",
  "Divya",
  "Kavita",
  "Sneha",
  "Preeti",
  "Ritika",
  "Payal",
  "Rashmi",
  "Simran",
  "Komal",
  "Anamika",
  "Deepika",
  "Meera",
  "Suhana",
  "Madhuri",
  "Jhanvi",
  "Kiran",
  "Aditi",
  "Bhavya",
  "Rupal",
  "Charu",
  "Mahima",
  "Sonali",
  "Pallavi",
  "Harshita",
  "Monika",
  "Trisha",
  "Tara",
  "Vasundhara",
].map((name) => name.toLowerCase());

const rejectedNames = [
  "Sohag",
  "Prodip",
  "Debmalya",
  "Uthso",
  "Rahul",
  "Kabiraj",
  "Maity",
  "Sandip",
  "Gopi",
  "Puchu",
  "Shubhajit",
  "Amit",
  "Sourav",
  "Vikram",
  "Rakesh",
  "Arjun",
  "Manish",
  "Nikhil",
  "Rajat",
  "Yogesh",
  "Pratik",
  "Sumit",
  "Abhishek",
  "Aakash",
  "Gaurav",
  "Vishal",
  "Aniket",
  "Rohan",
  "Ravi",
  "Chirag",
  "Siddharth",
  "Mayank",
  "Harsh",
  "Kunal",
  "Aditya",
].map((name) => name.toLowerCase());

const nextPageUrl = "main.html";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = codeInput.value.trim().toLowerCase();

  if (secretNames.includes(userInput)) {
    if (userInput === "saheli") {
      resultDiv.innerHTML = "Ami jantam bara chukchukani bei tder";
    } else {
      resultDiv.innerHTML = "Baby";
      setTimeout(() => {
        window.location.href = nextPageUrl;
      }, 2000);
    }
  } else if (rejectedNames.includes(userInput)) {
    resultDiv.innerHTML = "lawde sudhar ja !! I'm not a gay";
  } else {
    resultDiv.innerHTML =
      "Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri Sona";
  }
});

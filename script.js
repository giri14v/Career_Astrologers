const engineeringAssessmentQuestions = [
    {
        question: "What motivated you to pursue engineering as a career?",
        options: [
            "A. Fascination with technology and innovation",
            "B. Desire to solve real-world problems",
            "C. Influence of family members or mentors",
            "D. Passion for mathematics and science",
        ],
    },
    {
        question: "How do you handle complex problem-solving situations?",
        options: [
            "A. Break problems into smaller parts for analysis",
            "B. Collaborate with others to find solutions",
            "C. Stay patient and persistent",
            "D. Seek guidance from experts when needed",
        ],
    },
    {
        question: "Are you comfortable with mathematics and data analysis?",
        options: [
            "A. Strong mathematical skills",
            "B. Comfortable but looking to improve",
            "C. Need more practice and study",
            "D. Struggling with math concepts",
        ],
    },
    {
        question: "Have you been involved in any engineering-related extracurricular activities?",
        options: [
            "A. Actively participated in clubs and projects",
            "B. Some involvement, but seeking more",
            "C. Not involved, but interested",
            "D. No extracurricular involvement",
        ],
    },
    {
        question: "Do you enjoy working in a team and collaborating with others?",
        options: [
            "A. Absolutely, I thrive in team environments",
            "B. I prefer teamwork but can work solo too",
            "C. I prefer working independently",
            "D. I struggle with teamwork",
        ],
    },
    {
        question: "Are you interested in staying updated with the latest technological advancements?",
        options: [
            "A. Constantly reading and learning about new tech",
            "B. Try to stay updated when I can",
            "C. Occasionally follow tech news",
            "D. Not interested in tech trends",
        ],
    },
    {
        question: "Have you actively sought internships or co-op experiences in your field?",
        options: [
            "A. Multiple internships with reputable companies",
            "B. One or two internships",
            "C. Haven't had an internship but looking",
            "D. No internship experience yet",
        ],
    },
    {
        question: "Do you have any research experience or publications related to engineering?",
        options: [
            "A. Published research papers",
            "B. Involved in research projects",
            "C. Interested but no research experience",
            "D. No research background",
        ],
    },
    {
        question: "Have you considered pursuing advanced degrees (e.g., master's or Ph.D.) in engineering?",
        options: [
            "A. Planning to pursue an advanced degree",
            "B. Considering it as an option",
            "C. Not sure about further education",
            "D. Not interested in advanced degrees",
        ],
    },
    {
        question: "How do you manage your time and prioritize tasks when faced with tight deadlines?",
        options: [
            "A. Excellent time management skills",
            "B. Prioritize tasks based on importance",
            "C. Sometimes struggle with time management",
            "D. Easily overwhelmed by deadlines",
        ],
    },
    {
        question: "Have you participated in any engineering competitions or hackathons?",
        options: [
            "A. Actively participate and have won awards",
            "B. Joined a few competitions and learned a lot",
            "C. Interested but haven't participated yet",
            "D. Not interested in competitions",
        ],
    },
    {
        question: "Do you actively network with professionals or mentors in your chosen engineering field?",
        options: [
            "A. Actively network and have valuable mentors",
            "B. Networking when opportunities arise",
            "C. Interested but haven't started networking",
            "D. No networking or mentorship",
        ],
    },
    {
        question: "Are you a member of any engineering-related organizations or clubs?",
        options: [
            "A. Active member and hold leadership roles",
            "B. Member and occasionally participate",
            "C. Interested but not a member yet",
            "D. Not interested in joining clubs",
        ],
    },
    {
        question: "Have you taken leadership roles in any engineering projects or initiatives?",
        options: [
            "A. Frequently take on leadership roles",
            "B. Occasionally lead projects",
            "C. Interested but haven't had leadership opportunities",
            "D. Prefer not to take on leadership roles",
        ],
    },
    {
        question: "How do you handle failure or setbacks in your engineering endeavors?",
        options: [
            "A. Learn from failures and persevere",
            "B. Accept failures as part of the process",
            "C. Get discouraged but eventually recover",
            "D. Struggle to cope with failures",
        ],
    },
    {
        question: "Are you proficient in any specialized engineering software or tools?",
        options: [
            "A. Proficient in multiple specialized tools",
            "B. Proficient in some but looking to expand skills",
            "C. Basic knowledge of engineering software",
            "D. Limited or no proficiency in specialized tools",
        ],
    },
    {
        question: "Have you sought opportunities for public speaking or presenting your engineering work?",
        options: [
            "A. Regularly present engineering projects",
            "B. Comfortable with occasional presentations",
            "C. Interested but lack presentation experience",
            "D. Prefer not to engage in public speaking",
        ],
    },
    {
        question: "Do you actively seek out learning opportunities and online courses to improve your skills?",
        options: [
            "A. Constantly pursue learning opportunities",
            "B. Enroll in courses when relevant",
            "C. Interested but need more focus on self-improvement",
            "D. Rarely seek out learning opportunities",
        ],
    },
    {
        question: "Have you considered starting your own engineering-related projects or businesses?",
        options: [
            "A. Actively involved in side projects or startups",
            "B. Considered entrepreneurial opportunities",
            "C. Interested but haven't taken action yet",
            "D. Not interested in starting projects or businesses",
        ],
    },
    {
        question: "What are your long-term career goals in the field of engineering?",
        options: [
            "A. Aspire to be a leading expert in my field",
            "B. Seek a variety of challenging roles and projects",
            "C. Still exploring career options",
            "D. Unsure about long-term goals in engineering",
        ],
    },
];

const answerScores = {
    "A": 3,
    "B": 2,
    "C": 1,
    "D": 0,
};

document.addEventListener("DOMContentLoaded", function () {
    const questionsContainer = document.getElementById("questions-container");
    const submitButton = document.getElementById("submit-button");
    const userAnswers = [];

    // Function to calculate the user's score based on their answers
    function calculateUserScore(userAnswers) {
        let totalScore = 0;

        for (let i = 0; i < userAnswers.length; i++) {
            const question = engineeringAssessmentQuestions[i];
            const userAnswer = userAnswers[i];
            const score = answerScores[userAnswer.charAt(0)]; // Get the score for the selected option

            totalScore += score;
        }

        return totalScore;
    }

    // Function to provide guidance and recommendations based on the user's score
    function provideRecommendation(score) {
        if (score >= 18) {
            return (
                "Congratulations on your outstanding engineering mindset! Your remarkable passion for technology and innovation, along with your strong skills and unwavering determination, sets you apart. To continue on this exceptional path, it's important to excel in your academic studies and actively seek opportunities for innovation and leadership." +

                "Consider pursuing advanced degrees, such as a master's or Ph.D., or engaging in research projects to further enhance your expertise in your chosen field. This will not only deepen your knowledge but also open doors to more specialized and impactful roles in engineering."+
                
                "Additionally, staying engaged with professional networks and seeking mentorship will be invaluable in exploring exciting career prospects. Building relationships with experienced professionals can provide guidance, insights, and potentially lead to fulfilling roles and projects."+
                
                "In summary, your current trajectory in engineering is promising, and by following these recommendations, you can continue to thrive and make significant contributions to the field."
            );
        } else if (score >= 14 && score <= 17) {
            return (   "You show strong potential in the field of engineering. Your ability to effectively handle complex problem-solving situations demonstrates your analytical and critical thinking skills, which are essential in this profession. Additionally, your interest in staying updated with technology showcases your awareness of the ever-evolving nature of the field."+

                    "To further harness your potential, it's advisable to focus on building practical skills and gaining hands-on experience. This can be achieved through internships, co-op programs, or actively participating in extracurricular activities related to engineering. Practical experience not only complements your theoretical knowledge but also prepares you for real-world challenges and projects."+
            
                    "Consider seeking mentorship from experienced professionals in your chosen engineering field. Mentors can provide valuable guidance, share their industry insights, and help you navigate your career path effectively. Their mentorship can be instrumental in making informed decisions and identifying opportunities for growth."+
            
                    "In summary, your strong potential in engineering can be maximized by honing practical skills, gaining hands-on experience, and seeking mentorship. These steps will help you translate your potential into a successful and fulfilling engineering career."            
            );
        } else if (score >= 10 && score <= 13) {
            return (
                "You have room for improvement in your engineering journey. While you have laid a foundation, there's an opportunity for further growth and development. To progress effectively in your engineering career, consider the following steps:"+

                "Enhance Your Skills: Continue to build and refine your technical skills in areas relevant to your engineering field. This could involve taking additional courses, workshops, or self-study to strengthen your knowledge and capabilities."+
                
                "Seek Internships or Co-op Experiences: Actively pursue internships or co-op experiences with companies or organizations in your field. These hands-on opportunities provide invaluable practical exposure, allowing you to apply what you've learned in real-world scenarios."+
                
                "Engage in Engineering-Related Activities: Get involved in engineering-related activities and projects, both within and outside of your academic curriculum. Join engineering clubs, participate in projects, and collaborate with peers to gain experience and broaden your skill set."+
                
                "Networking: Start building your professional network within the engineering community. Attend industry events, conferences, and seminars to connect with professionals and potential mentors. Networking can open doors to valuable insights and career opportunities."+
                
                "Stay Informed: Keep yourself updated on the latest developments and trends in your engineering field. Subscribe to industry publications, follow relevant blogs, and engage with online communities to stay informed about emerging technologies and practices."+
                
                "Remember, improvement is a continuous journey. By actively engaging in these activities and seeking opportunities for growth, you can strengthen your position in the field of engineering and pave the way for a successful and fulfilling career"            );
        } else {
            return (
                "It appears that you may need to reevaluate your approach to engineering. This is a pivotal moment to reflect on your academic and career path. Here are some steps to consider:"+

                "Seek Guidance: Reach out to professors, academic advisors, or career counselors for guidance. They can help you identify areas where improvement is needed and provide valuable insights into potential career paths within engineering."+

                "Build Foundational Skills: Focus on strengthening your foundational skills in mathematics, science, and engineering fundamentals. These are the building blocks of a successful engineering career, and a solid grasp of these concepts is essential."+

                "Participate in Extracurricular Activities: Engage in extracurricular activities related to engineering. Join engineering clubs, teams, or projects to gain practical experience and work on real-world challenges. This hands-on involvement can significantly boost your skills and confidence."+

                "Explore Diverse Learning Opportunities: Be open to exploring various learning opportunities. Consider taking additional courses or workshops to broaden your knowledge base. Don't limit yourself to your core curriculum; explore interdisciplinary subjects to gain a holistic perspective."+

                "Rediscover Your Passion: Take this time to reignite your passion for engineering. Think about what initially drew you to this field and find ways to reconnect with that enthusiasm. Passion is a powerful motivator that can drive you to excel."+

                "Remember, everyone's journey in engineering is unique, and setbacks can be valuable learning experiences. By seeking guidance, focusing on fundamentals, and actively participating in extracurricular activities, you can rediscover your passion for engineering and set a course for a more fulfilling academic and career path."
            );
        }
    }

    // Function to display questions and gather user answers
function displayQuestionsAndCalculateScore() {
    let currentQuestionIndex = 0;

    // Function to display the current question
    function displayCurrentQuestion() {
        if (currentQuestionIndex < engineeringAssessmentQuestions.length) {
            const currentQuestion = engineeringAssessmentQuestions[currentQuestionIndex];

            // Display the question
            const questionElement = document.createElement("h3");
            questionElement.textContent = currentQuestion.question;
            questionsContainer.appendChild(questionElement);

            // Display answer options
            currentQuestion.options.forEach((option) => {
                const radioInput = document.createElement("input");
                radioInput.type = "radio";
                radioInput.name = "answer";
                radioInput.value = option.charAt(0);

                const optionLabel = document.createElement("label");
                optionLabel.textContent = option;
                optionLabel.appendChild(radioInput);

                questionsContainer.appendChild(optionLabel);
            });

            // Add event listener to all radio inputs
            const radioInputs = document.querySelectorAll('input[name="answer"]');
            radioInputs.forEach((radioInput) => {
                radioInput.addEventListener("change", () => {
                    const selectedOption = document.querySelector('input[name="answer"]:checked');

                    if (selectedOption) {
                        userAnswers.push(selectedOption.value);
                        currentQuestionIndex++;
                        questionsContainer.innerHTML = ""; // Clear the previous question

                        displayCurrentQuestion();
                    }
                });
            });
        } else {
            // All questions answered, calculate and display the score
            questionsContainer.innerHTML = ""; // Clear the questions
            const userScore = calculateUserScore(userAnswers);
            const userRecommendation = provideRecommendation(userScore);

            const resultElement = document.createElement("div");
            resultElement.innerHTML = `<p>User's Score: ${userScore}</p><p>Recommendation:</p><p>${userRecommendation}</p>`;
            questionsContainer.appendChild(resultElement);

            // Disable the submit button
            submitButton.disabled = true;
        }
    }

    // Start displaying the questions
    displayCurrentQuestion();
}

// Call the function to initiate the assessment
displayQuestionsAndCalculateScore();

// Reset the assessment for another user
submitButton.addEventListener("click", () => {
    userAnswers.length = 0; // Clear the user's answers
    questionsContainer.innerHTML = ""; // Clear the questions
    submitButton.disabled = false; // Enable the submit button
    displayQuestionsAndCalculateScore();
});


    // Call the function to initiate the assessment
    displayQuestionsAndCalculateScore();

    // Reset the assessment for another user
    submitButton.addEventListener("click", () => {
        userAnswers.length = 0; // Clear the user's answers
        questionsContainer.innerHTML = ""; // Clear the questions
        submitButton.disabled = false; // Enable the submit button
        displayQuestionsAndCalculateScore();
    });
});



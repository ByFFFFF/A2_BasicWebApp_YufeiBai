<template>
    <div class="home-wrapper">
        <div class="home-container">
            <section class="welcome-section">
                <h1>Welcome to Global Steps</h1>
                <p>Helping immigrants navigate their new lives with comprehensive resources and support.</p>
            </section>

            <section class="features-section">
                <h2>Our Key Services</h2>
                <div class="features">
                    <div class="feature">
                        <img :src="languageIcon" alt="Language Learning" />
                        <h3>Language Learning</h3>
                        <p>Improve your language skills through our specially designed programs, available in multiple
                            languages.</p>
                    </div>
                    <div class="feature">
                        <img :src="jobIcon" alt="Job Training" />
                        <h3>Vocational Training</h3>
                        <p>Access training resources to help you prepare for the job market and find meaningful
                            employment.
                        </p>
                    </div>
                    <div class="feature">
                        <img :src="healthIcon" alt="Health Support" />
                        <h3>Health Information</h3>
                        <p>Find reliable health information and services, including mental health support to manage
                            cultural
                            adjustment challenges.</p>
                    </div>
                </div>
            </section>

            <section class="testimonials-section">
                <h2>What Our Users Say</h2>
                <div class="testimonials">
                    <div class="testimonial">
                        <p>"Global Steps has been a lifesaver. I found the language classes so helpful!"</p>
                        <p>- User A</p>
                    </div>
                    <div class="testimonial">
                        <p>"Thanks to the vocational training, I now have a stable job in my new country."</p>
                        <p>- User B</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import languageIcon from '@/assets/language_icon.png'
import jobIcon from '@/assets/job_icon.png'
import healthIcon from '@/assets/health_icon.png'
</script>

<style scoped>
.home-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.home-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

.welcome-section,
.features-section,
.testimonials-section {
    text-align: center;
    margin-bottom: 40px;
}

h1 {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 10px;
}

h2 {
    font-size: 2em;
    color: #444;
    margin-bottom: 20px;
}

p {
    font-size: 1.2em;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
}

.features {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
}

.feature {
    flex: 1;
    max-width: 300px;
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.feature img {
    max-width: 100px;
    margin-bottom: 15px;
}

.feature h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.testimonials {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.testimonial {
    flex: 1;
    max-width: 400px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.testimonial p {
    font-style: italic;
    color: #555;
}

.cta-button {
    padding: 15px 30px;
    background-color: #4CAF50;
    color: white;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.cta-button:hover {
    background-color: #45a049;
}
</style>

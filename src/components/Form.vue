<template>
    <div class="home-container">
        <!-- 欢迎标语 -->
        <section class="welcome-section">
            <h1>Welcome to Global Steps</h1>
            <p>Helping immigrants navigate their new lives with comprehensive resources and support.</p>
        </section>

        <!-- 关于Global Steps -->
        <section class="about-section">
            <h2>About Global Steps</h2>
            <p>
                "Global Steps" is a platform designed to help immigrants overcome common challenges
                such as language barriers, employment difficulties, and social isolation. Through
                multilingual services and personalized resources, we aim to ease the transition into a
                new living environment.
            </p>
        </section>

        <!-- 特色服务 -->
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
                    <p>Access training resources to help you prepare for the job market and find meaningful employment.
                    </p>
                </div>
                <div class="feature">
                    <img :src="healthIcon" alt="Health Support" />
                    <h3>Health Information</h3>
                    <p>Find reliable health information and services, including mental health support to manage cultural
                        adjustment challenges.</p>
                </div>
            </div>
        </section>

        <!-- 用户体验 -->
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

        <!-- Call to Action -->
        <section class="cta-section">
            <h2>Join Global Steps Today!</h2>
            <p>Start exploring our services and make your transition smoother.</p>
            <button class="cta-button">Get Started</button>
        </section>
    </div>
</template>

<script setup>
import languageIcon from '@/assets/language_icon.png'
import jobIcon from '@/assets/job_icon.png'
import healthIcon from '@/assets/health_icon.png'
</script>

<style scoped>
.home-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.welcome-section,
.about-section,
.features-section,
.testimonials-section,
.cta-section {
    text-align: center;
    margin-bottom: 40px;
}

.features {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.feature {
    flex: 1;
    max-width: 300px;
    text-align: center;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

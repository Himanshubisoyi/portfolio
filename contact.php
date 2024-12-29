<?php include('header.php'); ?>
<Main class="Main-content">
    <div class="contact-details">
        <div class="portfolio-ti-wr">
            <h1>Contact</h1>
            <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a href="mailto:himanshubisoyi7@gmail.com" class="p1-color">himanshubisoyi7@gmail.com</a> .Want to get connected? Follow me on the social channels below. </p>
            <div class="social-media">
                <a href="https://www.facebook.com/himanshu.bisoyi.5/" target="_blank" rel="noopener noreferrer" class="facebook"></a>
                <a href="https://www.instagram.com/__d_i_p_u_____/" target="_blank" rel="noopener noreferrer" class="instagram"></a>
                <a href="https://x.com/bisoyi_him66201" target="_blank" rel="noopener noreferrer" class="Twitter"></a>
                <a href="https://www.linkedin.com/in/himanshu-bisoyi-65a85b209/" target="_blank" rel="noopener noreferrer" class="linkedin"></a>
                <a href="https://www.linkedin.com/in/himanshu-bisoyi-65a85b209/" target="_blank" rel="noopener noreferrer" class="youtube"></a>
            </div>
        </div>
        <div class="contact-details-wrap">
            <div class="main-title tit-half-wr">
                <div class="tit-wrap">
                    <h2>Contact Details</h2>
                </div>
            </div>
            <div class="contact-pam">
                <div class="cn-wi-me phone-det">
                    <div class="cn-ph-dt">
                        <h3>Phone</h3>
                        <a class="cont-det-p" href="tel:9348018484">9348018484</a>
                    </div>
                </div>
                <div class="cn-wi-me addres-det">
                    <div class="cn-ph-dt">
                        <h4>Location</h4>
                        <p class="cont-det-p">Madhapur,Hyderbad,India,500081</p>
                    </div>
                </div>
                <div class="cn-wi-me email-det">
                    <div class="cn-ph-dt">
                        <h5>Email</h5>
                        <a class="cont-det-p" href="mailto:himanshubisoyi7@gmail.com">himanshubisoyi7@gmail.com</a>
                    </div>
                </div>
            </div>
            <div class="contact-map">
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11200.675829730526!2d-75.6876061!3d45.42609535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sParliament+Hill!5e0!3m2!1sen!2sca!4v1528808935681" width="844" height="875" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="main-title tit-half-wr">
                <div class="tit-wrap">
                    <h2>Get In Touch</h2>
                    <p class="abut-cont">Have a question or need assistance? I’m here to help! Reach out through the contact form or directly via phone. I look forward to hearing from you and assisting with your needs.</p>
                </div>
            </div>  
            <div class="contact-page-form">
                <div class="contact-page-form">
                    <form action="mail.php" method="POST" autocomplete="off" id="contactForm" onsubmit="return validateForm()">
                        <div class="input-container cnt-name">
                            <input type="text" name="name" class="input" placeholder="Your Name*" required>
                        </div>
                        <div class="input-container cnt-mail">
                            <input type="email" name="email" class="input" placeholder="Email Address*" required>
                        </div>
                        <div class="input-container cnt-phone">
                            <input type="tel" name="phone" class="input" placeholder="Phone*" required>
                        </div>
                        <div class="input-container cnt-location">
                            <input type="text" name="location" class="input" placeholder="Location*" required>
                        </div>
                        <div class="input-container textarea">
                            <textarea name="message" class="input" placeholder="Your Message:" required></textarea>
                        </div>
                        <div class="form-group submit">
                            <div class="contact-submit-button">
                                <input class="has-spinner submit" id="submit" type="submit" value="Send Message">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="copywrite">
        <p>Copyright © 2024 <a href="index.php">Himanshu.CV</a> All Rights Reserved.</p>
        <p>Designed by <a href="https://www.linkedin.com/in/himanshu-bisoyi-65a85b209/" target="_blank" rel="noopener noreferrer">Himanshu</a></p>
    </div>
</Main>
<script>
    function validateForm() {
        var name = document.forms["contactForm"]["name"].value;
        var email = document.forms["contactForm"]["email"].value;
        var phone = document.forms["contactForm"]["phone"].value;
        var location = document.forms["contactForm"]["location"].value;
        var message = document.forms["contactForm"]["message"].value;
        var namePattern = /^[a-zA-Z\s]+$/;
        if (name == "" || !namePattern.test(name)) {
            alert("Please enter a valid name (letters only).");
            return false;
        }
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email == "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        var phonePattern = /^[0-9]{10}$/;
        if (phone == "" || !phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }
        if (location == "") {
            alert("Location must be filled out.");
            return false;
        }
        if (message == "") {
            alert("Message must be filled out.");
            return false;
        }

        return true;
    }
</script>
<?php include('footer.php'); ?>
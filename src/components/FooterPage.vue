<template>
    <div style="background-color: #F6F6F7; height: 500px; margin-top: 100px;">   
        <div class="footer">
            <div class="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <h3>Email : info@jstemplate.net</h3>
                <h3>Phone : 880 123 456 789</h3>
            </div>
            <div class="quicklink">
                <h1>Quick Link</h1>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Blog</h3>
                <h3>Archived</h3>
                <h3>Author</h3>
                <h3>Contact</h3>
            </div>
            <div class="category">
                <h1>Category</h1>
                <h3>Lifestyle</h3>
                <h3>Technology</h3>
                <h3>Travel</h3>
                <h3>Business</h3>
                <h3>Economy</h3>
                <h3>Sports</h3>
            </div>
            <div class="email">
                <h1>Weekly Newsletter</h1>
                <p style="margin: 0;">Get blog articles and offers via email</p>
                <input type="email" placeholder="Your email" class="icon" style="width: 315px; margin: auto; margin-bottom: 0; padding: 0; height: 48px; border-radius: 5px solid grey;">
                <button style="width: 320px; margin: auto; margin-top: 5px; padding: 0; height: 48px; color: white; background-color: #4B6BFB; border-radius: 5px; border: none;">Subscribe</button>
            </div>
        </div>
        <hr class="solid">
        <div class="copyright">
            <div style="display: flex;">
                <img src="@/assets/icon/Logo.svg">
                <div style="margin-left: 8px;">
                    <p> MetaBlog </p>
                    <p> © JS Template 2023. All Rights Reserved. </p>
                </div>
            </div>
            <ul class="contact">
                <li>Terms of Use</li>
                <div class="vl"></div>
                <li>Privacy Policy</li>
                <div class="vl"></div>
                <li>cookie Policy</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.footer{
    width: 1216px;
    height: 254px;
    margin: auto;
    display: flex;
    padding: 65px;
}
.about{
    width: 300px;
    margin: auto;
}
.quicklink{
    width: 250px;
    margin: auto;
    margin-left: 50px;
}
.category{
    width: 250px;
    margin: auto;
    margin-left: 50px;
}
.email{
    width: 392px;    
    height: 254px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
}
.copyright{
    width: 1216px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
hr.solid {
    border-top: 2px solid #bbb;
    width: 1216px;
    margin: auto;
}
.contact{
    display: flex;
}
.vl{
    border-left: 2px solid #bbb;
}
h3{
    margin: 10px;
}
li{
    list-style: none;
    margin: 15px;
}
</style>
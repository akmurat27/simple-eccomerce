<template>
    <div>
        <NavComp />
        <div class="main-page">
            <button class="btn">Technology</button>
            <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div class="avatar">
                <img src="@/assets/img/image(1).png">
                <h4 style="margin-right: 10px; margin-left: 10px; color: #97989F;">Jason Francisco</h4>
                <h4 style=" color: #97989F;"> August 20, 2022</h4>
            </div>
            <img src="@/assets/img/back-img.png">
            <p class="paragraph">
                Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
            </p>
            <p class="paragraph">
                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
            </p>
            <h3 class="header">Research Your Destination</h3>
            <p class="paragraph">
                Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
            </p>
            <p class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
            </p>
            <h3>Plan Your Itinerary</h3>
            <p class="paragraph">
                While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
            </p>
            <p class="paragraph">
                Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
            </p>
            <div class="quote">“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</div>
            <img src="@/assets/img/celovek.png">
            <div class="ads">
                <h4 style="margin: 12px; color: #696A75;">Advertisement</h4>
                <h2 style="margin: 12px; color: #696A75;">You can place ads</h2>
                <h3 style="margin: 12px; color: #696A75;">750x100</h3>
            </div>
            <h3>Pack Lightly and Smartly</h3>
            <p class="paragraph">Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
            <h3>Stay Safe and Healthy</h3>
            <p class="paragraph">Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
            <h3>Immerse Yourself in the Local Culture</h3>
            <p class="paragraph">One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
            <h3>Capture Memories</h3>
            <p class="paragraph">Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
            <h3>Conclusion:</h3>
            <p class="paragraph">Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import FooterPage from '@/components/FooterPage.vue'
export default {
  data: () => ({
    
  }),
  components:{
    FooterPage,
  }
}
</script>

<style scoped>
.btn{
  width: 97px;
  height: 28px;
  background-color: #4B6BFB;
  color: white;
  font-size: 14px;
  border: none;
  margin-right: 24rem;
}
.main-page{
    width: 800px;
    margin: auto;
}
.avatar{
  width: 351px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  margin-right: 8rem;
}
.quote{
    background-color: #E8E8EA;
    height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-style: italic;
}
.ads{
  width: 750px;
  height: 100px;
  margin: auto;
  background-color: #E8E8EA;
  text-align: center;
}
.paragraph{
    color: #3B3C4A;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.header{
    color: #181A2A;
    font-size: 24px;
}
</style>
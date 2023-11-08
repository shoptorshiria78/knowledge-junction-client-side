import Paragraph from "./Paragraph";
import Title from "./Title";


const FAQ = () => {
    return (
        <div className="mt-10">
            <Title>Ask Us</Title>
            <Paragraph>Explore our Frequently Asked Questions to find  <br/> answers to common inquiries about our services, products, or platform.  </Paragraph>
            <div className="collapse collapse-arrow bg-green-100 my-8">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title text-xl text-emerald-600 font-medium">
                What is Knowledge Junction, and how does it work?
                </div>
                <div className="collapse-content text-emerald-500">
                    <p>Knowledge Junction is a collaborative learning community where students with shared interests or courses come together to study and enhance their understanding. Members meet regularly to discuss topics, share resources, and work on assignments collectively. It is an effective way to grasp complex subjects, gain different perspectives, and boost motivation</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-green-100 my-8">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-emerald-600  text-xl font-medium">
                How can I join Knowledge Junction  website?
                </div>
                <div className="collapse-content text-emerald-500 ">
                    <p>Joining Knowledge Junction is easy! First, sign up for an account on our website. Browse our study group listings to find one that aligns with your interests or courses. Click on the group, and you can request to join. Once accepted, you can start participating in discussions, accessing shared resources, and collaborating with fellow members.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-green-100 my-8">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl text-emerald-600  font-medium">
                What are the benefits of participating in Knowledge Junction?
                </div>
                <div className="collapse-content text-emerald-500 ">
                    <p> Knowledge Junction offer numerous advantages. You will experience enhanced comprehension of course material, better retention, and reduced stress. The group environment fosters discussion, improves problem-solving skills, and provides valuable peer support. Additionally, study groups promote discipline and time management, making it easier to stay on top of coursework.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
import AddIcon from '@mui/icons-material/Add';

export default function Athletes() {

    return(
        <div className='pageContainer redBackground'>
            <div className='paddingBottom'>
                <h1 className='sectionHeader'>Athletes</h1>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://forms.gle/HtDgdFHq6pn87mHm7"
                    className='centerText'
                >
                    <h2>Join Garden State Performance <AddIcon /></h2>
                </a>
                <p className='sectionCaption'>Strength. Speed. Power. Agility.</p>
                <p className='largeBodyText'>
                    These are all phenomenal athletic qualities. The kind of qualities that can be trained and honed in hard, diligent off-seasons. 
                    The kind of qualities that can separate good from great in some instances. The kind of qualities that we are told are sought “at the next level”, so many coaches become experts in developing them.
                    <br/><br/>
                    But what really makes an athlete great? How do we develop confidence? Leadership? Creativity? 
                    Critical thinking? Problem solving? A pure joy for competition and sports?
                    <br/><br/>
                    At Garden State Performance, we believe in developing athletes in every sense of the word, not just combine warriors with high verts, fast 40s, and no redeeming qualities. 
                    We challenge our athletes in a variety of ways, exposing them to competitive environments, pushing their physical limits, and improving their ability to perceive and adapt in an athletic setting. 
                    <br/><br/>
                    Cone drills or ladder footwork will not prepare you for the environments found in your sport - rivalry road games, championship games, big comeback wins. 
                    This is where the mental and emotional components of sport (and life) must interplay with our physical abilities. 
                    At Garden State Performance we strive to ensure our athletes are improving holistically while learning still to enjoy movement, enjoy competition, and enjoy their own personal growth.
                    <br/><br/>
                    I believe that sports and competition can be for everyone, but as a coach I cannot promise that GSP is for everyone. Some basic prerequisites we look for:
                </p>
                <ul className='infoList marginBottom'>
                    <li>Athlete must be at least 14 years old</li>
                    <li>Parents must not be a "helicopter parent" - drop your kid off and let them have some time to themselves</li>
                    <li>Athletes must be committed to success on multiple fronts (changes in diet, going to bed earlier, etc.)</li>
                    <li>Depending on age and training experience, at minimum 1 or 2 training sessions per week.</li>
                    <li>Athletes must be open to competition, challenges, feedback, and coaching. I am not a yeller but I do talk to all the kids like adults, and I expect it to be received in a mature manner. </li>
                </ul>
                <p className='largeBodyText'>
                    If you have made it this far and feel like you or your child are a good fit for our programming, access the link below to fill out our Athlete Inquiry survey and we&#8217;ll set up your first session!
                </p>

                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://forms.gle/HtDgdFHq6pn87mHm7"
                    className='centerText'
                >
                    <h2>Join Garden State Performance <AddIcon /></h2>
                </a>

            </div>

        </div>

    )

}

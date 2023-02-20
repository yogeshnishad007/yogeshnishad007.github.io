import React from 'react';
import { Container,Common,H1 } from '../../SharedStyles/SharedStyles';
const Stats = () => {
    return (
        <Container>
            <Common>
                <H1>Github Calendar</H1>
            </Common>
            <img
                src='https://ghchart.rshah.org/021F34/yogeshnishad007'
                alt='calender'
                style={{ width: '80%', display: 'block', margin: 'auto' }}
            />
               
               <img
                src='https://github-readme-streak-stats.herokuapp.com/?user=yogeshnishad007&'
                alt='calender'
                style={{ width: '40%', display: 'block', margin: 'auto',marginTop:"40px" }}
            />

                <img
                src='https://github-readme-stats.vercel.app/api?username=yogeshnishad007&show_icons=true&locale=en'
                alt='calender'
                style={{ width: '40%', display: 'block', margin: 'auto',marginTop:"40px" }}
            />


               <img
                src=' https://github-readme-stats.vercel.app/api/top-langs?username=yogeshnishad007&show_icons=true&locale=en&layout=compact'
                alt='calender'
                style={{ width: '40%', display: 'block', margin: 'auto',marginTop:"40px" }}
            />
              
              
        </Container>
    );
};
export default Stats;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeadingStyles';

const Heading = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hello,<br /> I'm 
                Oleg Kutas
            </SectionTitle>
            <SectionText>
                System Administrator and Front-End Developer who loves to code and learn new things.
            </SectionText>
            <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
        </LeftSection>
    </Section>
);

export default Heading;
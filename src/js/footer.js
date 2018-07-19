import React from 'react';
import {
    Footer,
    FooterText,
    FooterLinks,
    FooterLink
} from 'react-weui';

class MyFooter extends React.Component{
    render = () => {
        return (<Footer>
            <FooterLinks>
                <FooterLink href="javascript:void(0);">关于</FooterLink>
                <FooterLink href="javascript:void(0);">联系</FooterLink>
            </FooterLinks>
            <FooterText>Copyright &copy; 2017-2018 SeekHoney</FooterText>
        </Footer>);
    }
}

export default MyFooter;
import React, { Component } from 'react';
import './home.scss';
import { Layout } from 'antd';




class Home extends Component {
    render() {
        const {
            Header, Footer, Sider, Content,
        } = Layout;
        return (
            <div className='home'>
                <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Home;

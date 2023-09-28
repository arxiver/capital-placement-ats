import React from 'react';
import { applicants } from './data';
import { searchIcon, dropDownIcon, documentIcon, infoIcon, dropDownBtnIcon, tagIcon, rejectIcon, acceptIcon, hearIcon, mailIcon } from './icons';
import { Avatar, Button, Checkbox, Input, Layout, Select, Typography } from 'antd';
import Sidenav from './components/Sidenav';
import { Content } from 'antd/es/layout/layout';
import "./App.css";
import { SearchOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';
import Applicant from './components/Applicant';
import SelectItem from './components/SelectItem';
import FilterItem from './components/FilterItem';
const App: React.FC = () => {

  return (
    <Layout>
      <Sidenav />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Row justify="start" align="top" >
          <Col flex={"353px"}>
            <Content style={{ marginTop: 23, marginLeft: 32 }}>
              <Typography className='title' style={{ textAlign: "start" }}>
                London Internship Program
              </Typography>
              <Typography className='subtitle' style={{ textAlign: "start" }}>
                London
              </Typography>
              <Input style={{ marginTop: 48 }} size="large" placeholder="Search by name, edu, exp or #tag" prefix={searchIcon} suffix={infoIcon} />
              <div className='paper'>
                <div className='paper__header' style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                  <Typography style={{ textAlign: "start", display: "inline-block" }}>Filters</Typography>
                  <Typography className='text-off' style={{ textAlign: "end", display: "inline-block" }}>0 Selected</Typography>
                </div>
                <Divider style={{ margin: 0, padding: 0 }} />
                <FilterItem title='Personl Information' />
                <FilterItem title='Education' />
                <FilterItem title='Work Experience' />
                <FilterItem title='Activity Filter' />
                <FilterItem title='Advanced Filter' hideDropDown={true} />
              </div>
            </Content>
          </Col>
          <Col flex={"auto"}>
            <Content style={{ marginTop: 23, marginLeft: 32 }}>
              <div className='toolbar' style={{ textAlign: "start", marginBottom: 46 }}>
                <Select
                  listItemHeight={72}
                  bordered
                  defaultValue="Opprtunity Browsing"
                  style={{ width: 321, textAlign: "start", height: "48px" }}
                  onChange={() => { }}
                  options={[
                    { value: 'Applied', label: <SelectItem title='Applied' count={1745} /> },
                    { value: 'Shortlisted', label: <SelectItem title='Shortlisted' count={453} /> },
                    { value: 'Technical Interview', label: <SelectItem title='Technical Interview' count={123} /> },
                    { value: 'Opprtunity Browsing', label: <SelectItem title='Opprtunity Browsing' count={243} /> },
                    { value: 'Video Interview I', label: <SelectItem title='Video Interview I' count={25} /> },
                    { value: 'Video Interview II', label: <SelectItem title='Video Interview II' count={25} /> },
                    { value: 'Video Interview III', label: <SelectItem title='Video Interview III' count={25} /> },
                    { value: 'Offer', label: <SelectItem title='Offer' count={25} /> },
                    { value: 'Withdrawn', label: <SelectItem title='Withdrawn' count={25} /> },
                  ]}
                />
                <div style={{display:"flex"}}>
                  <Button className='toolbar__icon'>{tagIcon}</Button>
                  <Button className='toolbar__icon'>{rejectIcon}</Button>
                  <Button className='toolbar__icon'>{acceptIcon}</Button>
                  <Button className='toolbar__icon'>{hearIcon}</Button>
                  <Button className='toolbar__icon'>{mailIcon}</Button>
                  <Button className='move-to-video-btn'>
                    Move To Video Interview I <Divider type='vertical' style={{ color: "white", backgroundColor: "white", height: "100%" }} />
                    {dropDownBtnIcon}
                  </Button>
                </div>
              </div>
              <div className='frame'>
                <div className='frame__header'>
                  <div style={{ textAlign: "start", display: "flex" }}>
                    <Checkbox style={{ marginRight: "32px" }} />
                    <Typography className='candidates-count'>247 Candidates</Typography>
                  </div>
                  <div style={{ textAlign: "right", display: "ruby" }}>
                    <Typography className='candidates-state-active'>Qualified</Typography>
                    <Divider type='vertical' />
                    <Typography className='candidates-state'>Task</Typography>
                    <Typography className='candidates-state-count'>25</Typography>
                    <Divider type='vertical' />
                    <Typography className='candidates-state'>Disqualified</Typography>
                    <Typography className='candidates-state-count'>78</Typography>
                  </div>
                </div>
                <div className='applicants-list'>
                  <Divider style={{ marginTop: "8px", marginBottom: "16px" }} />
                  {applicants.map(a =>
                    <Applicant name={a.name} location={a.location} degree={a.degree} flags={a.flags} tags={a.tags} />
                  )}
                </div>
              </div>
            </Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default App;

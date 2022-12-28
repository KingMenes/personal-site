import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {SiGeneralelectric} from 'react-icons/si'
import L3Harris from '../../L3Harris';

function Experience() {
  return (
      <div className='experience' id='experience'>
      <h2 className='heading'><span>02. </span> Experience <hr /></h2>
      <div className='timeline-container'>
        <VerticalTimeline>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020 - Present"
            iconStyle={{ background: '#ff000a', color: '#fff' , textAlign:"center"}}
            icon={<L3Harris fill='#000000' size={40}/>}
          >
          <h3 className="vertical-timeline-element-title">Mechanical Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">L3Harris Technologies</h4>
          <p>
            Design, User Experience, Modeling, Project Management
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 - 2019"
            iconStyle={{ background: '#f26400', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Rochester Institute of Technology</h4>
            <p>
              Product Development, Modeling, Analysis, Team Leading
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Mech Eng Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle">21st Century Group</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2016"
            iconStyle={{ background: '#3b73b9', color: '#fff' }}
            icon={<SiGeneralelectric/>}
          >
            <h3 className="vertical-timeline-element-title">Mech Eng Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle">GE Aviation</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2015"
            iconStyle={{ background: '#f26400', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Micro Fab Lab Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Rochester Institute of Technology</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
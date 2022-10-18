import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import L3HarrisLogo from '../../assets/l3harris.svg'

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
            iconStyle={{ background: '#ff000a', color: '#fff' }}
            // icon={<img src={L3HarrisLogo} />}
          >
          <h3 className="vertical-timeline-element-title">Mechanical Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">L3Harris Technologies</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Lab Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Rochester Institute of Technology</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Lab Assistant</h3>
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
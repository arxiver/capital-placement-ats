import { Checkbox, Typography } from "antd";
import './style.css';

export default function Applicant({ name, location, degree, flags, tags }: { name: string, location: string, degree: string, flags: string[], tags: string[] }) {
  return <div className='frame__content'>
    <div className='applicant-overview'>
    <Checkbox style={{ marginRight: "32px" }} />
      <div className='applicant-overview__avatar'>{name[0] + name.split(' ')?.[1]?.[0]}</div>
      <div className='applicant-overview__content'>
        <Typography className='applicant-overview__name'>{name}</Typography>
        <Typography className='applicant-overview__location'>{location}</Typography>
        <Typography className='applicant-overview__degree'>{degree}</Typography>
        <div>
          {flags.map(f =>
            <Typography className='applicant-overview__rate'> {f} </Typography>
          )}
        </div>
        <div>
          {tags.map(t =>
            <Typography className='applicant-overview__tag'> {t} </Typography>
          )}
        </div>
      </div>
    </div>
  </div>
}
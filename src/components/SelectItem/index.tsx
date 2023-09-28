import { Typography } from "antd"

export default function SelectItem({ title, count }: { title: string, count: number }) {
  return (<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "space-between" }}>
    <Typography style={{
      display: "inline", textAlign: "start"
    }} className='candidates-state'>{title}</Typography>
    <Typography style={{
      display: "inline", textAlign: "end"
    }} className='candidates-state-count'>{count}</Typography>
  </div>)
}
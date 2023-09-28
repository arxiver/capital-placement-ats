import { Typography, Divider } from "antd";
import { dropDownIcon, documentIcon } from "../../icons";

export default function FilterItem({ title, hideDropDown }: { title: string, hideDropDown?: boolean }) {
  return <>
    <div className='paper__item' style={{ alignItems: "center", display: "grid", gridTemplateColumns: "auto auto" }}>
      <Typography style={{ textAlign: "start", display: "flex" }}>
        <Typography className='filter-item-icon' style={{ textAlign: "start", display: "flex", justifySelf: "center" }}>{documentIcon}</Typography>
        <Typography className='filter-item-text' style={{ textAlign: "start", display: "inline-block" }}>{title}</Typography>
      </Typography>
      {!hideDropDown && <Typography className='text-off' style={{ textAlign: "end", display: "inline-block" }}>{dropDownIcon}</Typography>}
    </div>
    <Divider style={{ margin: 0, padding: 0 }} />
  </>
}
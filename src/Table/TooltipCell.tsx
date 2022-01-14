import { Tooltip as MuiTooltip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { CSSProperties } from 'react'
import { CellProps } from 'react-table'

const useStyles = makeStyles({
  truncated: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
})

export const TooltipCellRenderer: React.FC<CellProps<any>> = ({ cell: { value }, column: { align = 'left' } }) => (
  <TooltipCell text={value} align={align} />
)

interface TooltipProps {
  text: string
  tooltip?: string
  align: string
}

export const TooltipCell: React.FC<TooltipProps> = ({ text, tooltip = text, align }) => {
  const classes = useStyles({})
  return (
    <MuiTooltip title={tooltip} className={classes.truncated} style={{ textAlign: align } as CSSProperties}>
      <span>{text}</span>
    </MuiTooltip>
  )
}

import React, { FC, Children } from 'react'

interface IProps {
  colIndex: number
  rowIndex: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <div data-cy={`block-${rowIndex}-${colIndex}`}>
      {rowIndex}
      {colIndex}
    </div>
  )
}

export default Block

import React, { useEffect, useRef } from 'react'
import './styles.less'

type SectionInfoProps = {
  label: string
  content: React.ReactNode
  isDivider?: boolean
  style?: React.CSSProperties
  initialContainerWidth?: number
  gap?: number
  breakpoint?: number
}

const SectionInfo = ({
  label,
  content,
  isDivider = false,
  style,
  initialContainerWidth = 300,
  gap = 8,
  breakpoint = 600
}: SectionInfoProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const containerWidth = entries[0]?.contentRect?.width || initialContainerWidth
        containerRef.current!.style.flexDirection = containerWidth >= breakpoint ? 'row' : 'column'
      })

      resizeObserver.observe(containerRef.current)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [initialContainerWidth, breakpoint])

  return (
    <div
      ref={containerRef}
      style={{ ...style, gap }}
      className={`section-info-custom ${isDivider ? 'section-info-custom--divider' : ''}`}
    >
      <div className='section-info-custom__label'>{label}</div>

      {typeof content === 'string' || typeof content === 'number' ? (
        <div className='section-info-custom__value'>{content}</div>
      ) : (
        content
      )}
    </div>
  )
}

export default SectionInfo

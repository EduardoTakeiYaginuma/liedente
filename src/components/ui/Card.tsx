import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card = ({ children, className = '', hover = false }: CardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-2xl transform hover:-translate-y-2' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return <h3 className={`text-xl font-bold text-secondary ${className}`}>{children}</h3>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={className}>{children}</div>
}

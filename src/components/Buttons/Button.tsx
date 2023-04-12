import MyIcon from '../../assets/icons/Icon'

export interface ButtonProps {
  label: string
  type: keyof typeof ButtonTypes
  size: keyof typeof ButtonSizes
  icon?: 'bank' | 'archive' | 'bandaid'
}

const getClassnames = (type: string, color: string, textColor?: string) => {
  const buttonClass = {}
}
export const ColorButtonTypes = {
  primary:
    'bg-primary hover:bg-primary-700 text-primaryCt hover:bg-primary-hover active:bg-primary-active fill-primaryCt',
  secondary:
    'bg-secondary hover:bg-secondary-700 text-secondaryCt hover:bg-secondary-hover actvie:bg-secondary-active fill-secondaryCt',
  alert: 'bg-amber-300 text-amber-900 hover:bg-amber-400 active:bg-amber-200 fill-amber-900',
  info: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-400 fill-white',
  error: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-400 fill-white',
}

export const ButtonTypes = {
  primary: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-primary border-primary fill-primary',
  secondary: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-secondary border-secondary fill-secondary',
  alert: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-amber-300 border-amber-300 fill-amber-300',
  info: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-sky-500 border-sky-500 fill-sky-500',
  error: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-red-500 border-red-500 fill-red-500',
}

export const FabButtonTypes = {
  primary: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-primary border-primary',
  secondary: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-primary border-secondary',
  alert: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-amber-300 border-amber-300',
  info: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-sky-500 border-sky-500',
  error: 'bg-slate-50 hover:bg-slate-200 active:bg-slate-50 text-red-500 border-red-500',
}

export const ButtonSizes = {
  sm: 'py-1 px-2 m-2 snap-center text-caption leading-none',
  md: 'py-1 px-3 m-2 snap-center text-small leading-none',
  lg: 'py-2 px-3 m-2 snap-center text-regular leading-none',
  xl: 'py-2 px-3 m-2 snap-center text-large leading-none',
}

export const ColorButton: React.FC<ButtonProps> = ({ label, size, type }) => {
  const classnames = `${ColorButtonTypes[type]} ${ButtonSizes[size]} font-roboto rounded transition duration-150 ease-in-out inline-block m-2 flex shadow-lg hover:shadow-md active:shadow-inner`
  return (
    <>
      <div>
        <button className={classnames + ''}>{label}</button>
      </div>
    </>
  )
}

export const FabButton: React.FC<ButtonProps> = ({ size, type, icon = 'archive' }) => {
  const classnames = `${FabButtonTypes[type]} ${ButtonSizes[size]} snap-center items-center items-middle
 border-3 border font-roboto rounded-full transition duration-150 ease-in-out inline-block m-2 flex shadow-lg hover:shadow-md active:shadow-inner`
  const iconSizes = {
    sm: 10,
    md: 14,
    lg: 16,
    xl: 32,
  }
  const iconClass = `p-0 m-0`
  return (
    <>
      <div>
        <button className={classnames + ''}>
          <MyIcon size={size} icon={icon} className={`${FabButtonTypes[type]}`} />
        </button>
      </div>
    </>
  )
}

export const IconButton: React.FC<ButtonProps> = ({ label, size, icon = 'bandaid', type }) => {
  const classnames = `${ButtonTypes[type]} ${ButtonSizes[size]} border-3 border font-roboto rounded transition duration-150 ease-in-out inline-block m-2 flex shadow-lg hover:shadow-md active:shadow-inner`
  return (
    <>
      <div>
        <button className={classnames + 'align-middle items-center'}>
          <MyIcon size={size} icon={icon} className={`${FabButtonTypes[type]}`} />
          {label}
        </button>
      </div>
    </>
  )
}

export const ColorIconButton: React.FC<ButtonProps> = ({ label, size, icon = 'bandaid', type }) => {
  const classnames = `${ColorButtonTypes[type]} ${ButtonSizes[size]} border-3 border font-roboto rounded transition duration-150 ease-in-out inline-block m-2 flex shadow-lg hover:shadow-md active:shadow-inner`
  return (
    <>
      <div>
        <button className={classnames + 'align-middle items-center'}>
          <MyIcon size={size} icon={icon} className={`${FabButtonTypes[type]}`} />
          {label}
        </button>
      </div>
    </>
  )
}

export const Button: React.FC<ButtonProps> = ({ label, size, type }) => {
  const classnames = `${ButtonTypes[type]} ${ButtonSizes[size]} border-3 border font-roboto rounded transition duration-150 ease-in-out inline-block m-2 flex shadow-lg hover:shadow-md active:shadow-inner`
  return (
    <>
      <div>
        <button className={classnames + 'align-middle items-center'}>{label}</button>
      </div>
    </>
  )
}

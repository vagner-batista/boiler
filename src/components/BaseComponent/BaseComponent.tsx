export interface IBaseComponent {
  sampleTextProp: string
}

const BaseComponent: React.FC<IBaseComponent> = ({ sampleTextProp }) => {
  return <div>Sample Text prop: {sampleTextProp}</div>
}

export default BaseComponent

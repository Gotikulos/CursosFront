import './campo-entrada.styles.css'

export function CampoEntrada ({props}) {
  return (
    <input 
      {...props}
      className='campo-entrada-form'
    />
  )
}
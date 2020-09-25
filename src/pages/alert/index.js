import styles from './index.module.css'

export default function Alert() {
  return (
    <div className={styles.sectionFormTier}>
      <p>Formulario de alerta de pet encontrato</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRIY6NrKBRfu4RoCcJXqUWL3459S7nE3bOIueY-Tn-x-kjQw/viewform?embedded=true">
        Loading…
      </iframe>
    </div>)
}
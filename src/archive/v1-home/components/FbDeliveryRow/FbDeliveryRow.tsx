import { FacebookEmbed } from '@/components/FacebookEmbed/FacebookEmbed'
import { FirstDelivery } from '@/components/FirstDelivery/FirstDelivery'
import styles from './FbDeliveryRow.module.css'

export function FbDeliveryRow() {
  return (
    <div className={styles.row}>
      <FacebookEmbed inRow />
      <FirstDelivery />
    </div>
  )
}

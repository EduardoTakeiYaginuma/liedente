import Image from 'next/image'
import ClinicaRecepcao from '@/components/clinic/clinicaRecepcao'
import ClinicaFundadores from '@/components/clinic/clinicaFundadores'
import ClinicaLogos from '@/components/clinic/clinicaLogos'

export default function AClinicaPage() {
  return (
    <>
    <ClinicaRecepcao />
    <ClinicaFundadores />
    <ClinicaLogos/>
    </>
  )
}

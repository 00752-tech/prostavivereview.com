import { redirect } from 'next/navigation'

export async function GET() {
  redirect('https://hop.clickbank.net/?affiliate=007cc&vendor=provive&pid=20&tid=vsl_api')
}


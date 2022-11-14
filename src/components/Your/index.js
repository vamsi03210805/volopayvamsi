import {useState, useEffect} from 'react'

import CardsYour from '../CardsYour'

const Your = () => {
  const [v, setV] = useState([])

  useEffect(() => {
    const apiResult1 = async () => {
      const options = {
        method: 'GET',
      }
      const response = await fetch(
        'https://636df5d6b567eed48ace4185.mockapi.io/all?owner_id=1',
        options,
      )
      const data = await response.json()
      const finalData1 = data.map(each => ({
        name: each.Name,
        available: each.available_to_spend,
        budgetName: each.budget_name,
        cardType: each.card_type,
        expiry: each.expiry,
        id: each.id,
        image: each.image,
        limit: each.limi,
        ownerId: each.owner_id,
        personName: each.person_name,
        status: each.status,
        spent: each.spent,
      }))
      setV(finalData1)
    }
    apiResult1()
  })

  return (
    <div className="all-card-in-place">
      {v.map(each => (
        <CardsYour each={each} key={each.id} />
      ))}
    </div>
  )
}
export default Your

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Table, Card } from 'reactstrap'

// ** Icons Imports
import { DollarSign, TrendingUp } from 'react-feather'

const CompanyTable = () => {
  // ** vars

  const data = [
    { avatarContent: 'D',
      name: 'Dixonsyt',
      icon: <DollarSign size={18} />,
      category: 'MercariDiamond',
      revenue: '89,100.2',
      sales: '68',
      salesUp: true
    },
    {
      avatarContent: 'C',
      name: 'Condity34',
      icon: <DollarSign size={18} />,
      category: 'MercariDiamond',
      revenue: '66,800.51',
      sales: '97',
      salesUp: true
    },
    {
      avatarContent: 'Z',
      name: 'Zipcar7645',
      icon: <DollarSign size={18} />,
      category: 'MercariDiamond',
      revenue: '52,200.29',
      sales: '62',
      salesUp: true
    },
    {
      avatarContent: 'R',
      name: 'Citwte',
      icon: <DollarSign size={18} />,
      category: 'MercariGold',
      revenue: '49,100.01',
      sales: '88',
      salesUp: true
    },
    {
      avatarContent: 'C',
      name: 'Cafés3453',
      icon: <DollarSign size={18} />,
      category: 'MercariDiamond',
      revenue: '38,300.93',
      sales: '16',
      salesUp: true
    },
    {
      avatarContent: 'P',
      name: 'Petlee',
      icon: <DollarSign size={18} />,
      category: 'MercariGold',
      revenue: '30,080.05',
      sales: '78',
      salesUp: true
    },
    {
      avatarContent: 'P',
      name: 'Payers',
      icon: <DollarSign size={18} />,
      category: 'MercariGold',
      revenue: '25,531.49',
      sales: '42',
      salesUp: true
    }
  ]
  const colorsArr = {
    MercariGold: 'light-warning',
    MercariDiamond: 'light-success'
  }

  const renderData = () => {
    return data.map(col => {
      const IconTag = col.salesUp ? (
        <TrendingUp size={15} className='text-success' />
      ) : (
        <TrendingDown size={15} className='text-danger' />
      )

      return (
        <tr key={col.name}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <Avatar content={col.avatarContent} color='success'/>
                </div>
              </div>
              <div>
                <div className='fw-bolder'>{col.name}</div>
                <div className='font-small-2 text-muted'>{col.email}</div>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <Avatar className='me-1' color={colorsArr[col.category]} icon={col.icon} />
              <span>{col.category}</span>
            </div>
          </td>
          
          <td>${col.revenue}</td>
          <td>
            <div className='d-flex align-items-center'>
              <span className='fw-bolder me-1'>{col.sales}%</span>
              {IconTag}
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th>Highest Earners</th>
            <th>Investment Plan</th>
            <th>Revenue</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable

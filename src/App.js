import React, { useEffect } from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'
import { useState } from 'react'

// list of users: https://reqres.in/api/users

function App() {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [searchValue, setSearchValue] = useState('')
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)
  
const onChangeSearchValue = (e) => {
setSearchValue(e.target.value)
}

const onClickInvite = (id) => {
  if (invites.includes(id)) {
    setInvites(prev => prev.filter(_id => _id !== id))
  } else {
    setInvites(prev => [...prev, id])
  }
}

const onClickSentInvites = () => {
  setSuccess(true)
}

  useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(json => {
				setUsers(json.data)
			})
			.catch(err => {
				console.error(err)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className='App'>
			{success ? (
				<Success count={invites.length} />
			) : (
				<Users
					onChangeSearchValue={onChangeSearchValue}
					searchValue={searchValue}
					items={users}
					isLoading={isLoading}
					onClickInvite={onClickInvite}
					invites={invites}
					onClickSentInvites={onClickSentInvites}
				/>
			)}
		</div>
	)
}

export default App

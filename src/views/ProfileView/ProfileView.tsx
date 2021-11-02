import React, { FC } from 'react'
import { connect } from 'react-redux'
import ProfileCard from '../../components/Autentication/ProfileCard'
import Header from '../../components/Header'
import Container from '../../shared/Container'
import withPermission from '../../utils/HOC/withPermission'

declare interface ProfileViewProps {
  user: {
    name: string
    email: string
  }
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
  return (
    <div>
      <Header title="AlgaStock" />
      <Container>
        <div className="profile-view-container">
          <ProfileCard user={props.user} />
        </div>
      </Container>
    </div>
  )
}

const mapStateToProps = () => ({
  user: {
    name: 'Wemerson Maduro mokado profileview',
    email: 'wemerson.maduro@gmail.com',
  },
})

export default connect(mapStateToProps)(
  withPermission(['admin', 'customer'], '/')(ProfileView)
)

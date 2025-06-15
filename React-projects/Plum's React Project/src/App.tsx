import React from 'react'
import { useState } from 'react'

import LearningProfileObject from './Components/LearningProfileObject'
import SkillList from './Components/SkillList'

import './App.css'

function App() {



  return (
    <>
      <h1>Learner Profile</h1>

      <LearningProfileObject />
      <h2>Skill List with confidence level </h2>

      <SkillList />

    </>
  )
}

export default App

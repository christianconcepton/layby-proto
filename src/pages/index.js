import React, { Component } from 'react'
import { Link } from "gatsby"

import DenturePosition from '../components/DenturePosition'
import Teeth from '../components/Teeth'
import UpperConditions from '../components/UpperConditions'
import Calculation from '../components/Calculation'

import { Container } from 'react-bootstrap'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default class IndexPage extends Component {
  // maxTeethSide = 14
  // eCost = 0
  // dCost = 0
  
  // ppe = 135
  // ppt = 31
  
  // ttmid = 0 // Teeth to make in denture
  // tte = 0 // Teeth to extract

  constructor() {
    super()

    this.state = {
      position: null,
      ft: null,
      tl: null,
      full: null,
      maxTeethSide: 14,
      eCost: 0,
      dCost: 0,
      ppe: 135,
      ppt: 31,
      ttmid: 0,
      tte: 0,
      opposite: null,
      naa: null,
      upperConditions: false,
      canCalculate: false
    }
  }

  componentDidMount() {
    let search = window.location.search
    let params = new URLSearchParams(search)

    const draft = {
      position: null,
      ft: null,
      tl: null,
      full: null,
      maxTeethSide: 14,
      eCost: 0,
      dCost: 0,
      ppe: 135,
      ppt: 31,
      ttmid: 0,
      tte: 0,
      opposite: null,
      naa: null,
      upperConditions: false,
      canCalculate: false
    }

    let position = params.get('position')
    if ( position === "upper" ) {
      draft.position = "upper"
    } else if ( position === "lower" ) {
      draft.position = "lower"
    }

    let ft = parseInt(params.get('ft'))
    if ( ft !== "" && ft !== null && !isNaN(ft) ) {
      draft.ft = ft
    }

    let tl = parseInt(params.get('tl'))
    if ( tl !== "" && tl !== null && !isNaN(tl) ) {
      draft.tl = tl
    }

    if ( ft >= 3 && ft <= 4  && position === "upper" ) {
      draft.upperConditions = true
    }

    let naa = params.get('naa')
    let opposite = params.get('opposite')

    if ( naa !== null & opposite !== null ) {
      draft.naa = parseInt( naa ) === 1 ? true : false;
      draft.opposite = parseInt( opposite ) === 1 ? true : false;
    }

    if ( draft.upperConditions && draft.naa !== null && draft.opposite !== null ) {
      draft.canCalculate = true;
    } else if ( draft.position !== null && ( draft.ft !== null && draft.tl !== null ) && draft.upperConditions === false ) {
      draft.canCalculate = true;
    }
    
    if ( draft.canCalculate ) {
      if ( draft.position === "lower" ) {
        if ( ft <= 1 ) {
          draft.full = true
          draft.tte = tl
          draft.ttmid = draft.maxTeethSide
        }
        else if ( ft >= 2 && ft <= draft.maxTeethSide ) {
          draft.full = false
          draft.tte = tl - ft
          draft.ttmid = draft.maxTeethSide - ft
        }
  
        draft.eCost = draft.tte * draft.ppe
        draft.dCost = draft.ttmid * draft.ppt
        draft.cost = draft.eCost + draft.dCost
      } else if ( draft.position === "upper" ) {
        if ( ft <= 2 || ( draft.naa && draft.opposite ) ) {
          draft.tte = tl
          draft.ttmid = draft.maxTeethSide
        }
        else {
          draft.tte = tl - ft
          draft.ttmid = draft.maxTeethSide - ft
        }

        draft.eCost = draft.tte * draft.ppe
        draft.dCost = draft.ttmid * draft.ppt
        draft.cost = draft.eCost + draft.dCost
      }
    }

    this.setState( draft )
  }

  render() {
    return (
      <Layout>
        <Container>
          { this.state.position === null ? <DenturePosition /> : null }
          { this.state.position !== null && ( this.state.ft === null && this.state.tl === null ) ? <Teeth state={this.state} /> : null }
          { this.state.upperConditions && this.state.naa == null && this.state.opposite == null ? <UpperConditions state={this.state}/> : null }
          { this.state.canCalculate ? <Calculation state={this.state} /> : null }
        </Container>
      </Layout>
    )
  }
}
import React, { useState, useEffect } from 'react'
import Title from '../Title'
import Card from '../Card'
import Empty from '../Empty'
import './styles.scss'

const Work = () => {
    const [dataWorks, setDataWorks] = useState([])
    const getDataWorks = () => {
        fetch('./data/trabajos.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then(function (response) {
                console.log(response)
                return response.json()
            })
            .then(function (myJson) {
                console.log(myJson)
                setDataWorks(myJson)
            })
    }

    useEffect(() => {
        getDataWorks()
    }, [])

    return (
        <div id="work" className="work">
            <Title
                title={'Trabajos'}
                subtitle={
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                }
            />
            {dataWorks.length > 0 ? (
                dataWorks.map((item, index) => (
                    <Card
                        key={index}
                        title={item.company}
                        about={item.about}
                        img={item.background}
                    />
                ))
            ) : (
                <Empty />
            )}
        </div>
    )
}

export default Work

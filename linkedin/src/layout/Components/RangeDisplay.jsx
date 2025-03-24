import React, { useState } from 'react'
import downArrow from '../../assets/down-arrow.png'
import filterPostsByDateRange from '../helpers/filterPostsByDateRange';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function RangeDisplay({ startDate, setStartDate, endDate, setEndDate }) {
    return (
        <>
            <p>Range:
                <span>
                    <div class="dropdown">
                        top <img src={downArrow} />
                        <div class="dropdown-date">
                            <Label className='' 
                                    htmlfor="start" 
                                    value="Start:" 
                            />
                            <Input type="date" 
                                    id="start" 
                                    value={startDate} 
                                    onChange={(e) => setStartDate(e.target.value)} 
                            />
                            <hr />
                            <Label className='' 
                                    htmlfor="end"   
                                    value="End:" 
                            />
                            <Input type="date" 
                                    id="end" 
                                    value={endDate} 
                                    onChange={(e) => setEndDate(e.target.value)} 
                            />
                            <hr />
                            <Button onClick={() => filterPostsByDateRange(startDate, endDate)}
                                textContent="Submit"
                                value="submit"
                            />
                        </div>
                    </div>
                </span>
            </p>
        </>
    )
}
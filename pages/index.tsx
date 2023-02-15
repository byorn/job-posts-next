"use client";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import jobData from '../data/jobs.json';
import Link from 'next/link'
import { Link as MUILink } from '@mui/material';
import { Button as MuiButton } from  '@mui/material';
import { GetStaticProps } from 'next'
import JobDataType from "./types/JobDataType";


interface Props {
    data: any
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const data:JobDataType[] = jobData;
    return { props: { data } }
}


export default function Home({data }: Props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Byorns Playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>



          { data.map((job: JobDataType) => <div key={job.jobId}>{job.jobId} <MUILink  component={Link} href={`job-details/${job.jobId}`}>{job.jobDescription}</MUILink></div>) }

      </main>


    </div>
  )
}

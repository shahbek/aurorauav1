import styled from 'styled-components'

export const Layout = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    place-items: center;

    background: white;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 36px 48px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 20px;
    text-align: center;

    p {
        margin-top: -10px;
        color: #777;
    }
`

export const BoxUpload = styled.div`
    display: grid;
    margin-top: 20px;
    place-items: center;
    border: 1px dashed grey;
    /* padding: 36px 48px; */
    position: relative;

    height: 100%;
    width: 100%;

    background: #FBFBFF;
    border-radius: 20px;

    .image-upload {
        display: flex;
        flex-wrap:wrap;

        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`

export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;

        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`
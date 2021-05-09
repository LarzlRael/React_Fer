import cloudinary from 'cloudinary';

import { fileUpload } from "../../herpers/fileUpload";

cloudinary.config({
    cloud_name: 'daij4l3is',
    api_key: '417265776162247',
    api_secret: '7xNXiV5R9hK4iaWXVo4PmJ4z9fA'
});


describe('Testing in fileupload', () => {

    test('should load a fiile a return the url', async () => {

        // load a image from url
        const resp = await fetch('https://www.adamenfroy.com/wp-content/uploads/word-image-142.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // delete imagen by id
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');
        console.log(imageId);

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            console.log('image uploaded and deleted');
        });

    })

    test('should return a error', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);

    })


})

'use client';

import { useBoolean } from 'ahooks';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'lib/routes/paths';
import { fData } from 'lib/utils/format-number';
import { Iconify } from 'lib/components/iconify';
import { CustomBreadcrumbs } from 'lib/components/custom-breadcrumbs';
import { Upload, UploadBox, UploadAvatar } from 'lib/components/upload';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function UploadView() {
  const [preview, previewActions] = useBoolean();

  const [files, setFiles] = useState<(File | string)[]>([]);

  const [file, setFile] = useState<File | string | null>(null);

  const [avatarUrl, setAvatarUrl] = useState<File | string | null>(null);

  const handleDropSingleFile = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    setFile(newFile);
  }, []);

  const handleDropAvatar = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    setAvatarUrl(newFile);
  }, []);

  const handleDropMultiFile = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
    },
    [files]
  );

  const handleRemoveFile = (inputFile: File | string) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const DEMO = [
    {
      name: 'Upload multi file',
      component: (
        <>
          <FormControlLabel
            control={<Switch checked={preview} onClick={previewActions.toggle} />}
            label="Show Thumbnail"
            sx={{ mb: 3, width: 1, justifyContent: 'flex-end' }}
          />
          <Upload
            multiple
            thumbnail={preview}
            value={files}
            onDrop={handleDropMultiFile}
            onRemove={handleRemoveFile}
            onRemoveAll={handleRemoveAllFiles}
            onUpload={() => console.info('ON UPLOAD')}
          />
        </>
      ),
    },
    {
      name: 'Upload single file',
      component: (
        <Upload value={file} onDrop={handleDropSingleFile} onDelete={() => setFile(null)} />
      ),
    },
    {
      name: 'Upload avatar',
      component: (
        <UploadAvatar
          value={avatarUrl}
          onDrop={handleDropAvatar}
          validator={(fileData) => {
            if (fileData.size > 1000000) {
              return {
                code: 'file-too-large',
                message: `File is larger than ${fData(1000000)}`,
              };
            }
            return null;
          }}
          helperText={
            <Typography
              variant="caption"
              sx={{
                mt: 3,
                mx: 'auto',
                display: 'block',
                textAlign: 'center',
                color: 'text.disabled',
              }}
            >
              Allowed *.jpeg, *.jpg, *.png, *.gif
              <br /> max size of {fData(3145728)}
            </Typography>
          }
        />
      ),
    },
    {
      name: 'Upload box',
      component: (
        <Stack direction="row" spacing={2}>
          <UploadBox />
          <UploadBox
            placeholder={
              <Stack spacing={0.5} alignItems="center">
                <Iconify icon="eva:cloud-upload-fill" width={40} />
                <Typography variant="body2">Upload file</Typography>
              </Stack>
            }
            sx={{ mb: 3, py: 2.5, flexGrow: 1, height: 'auto' }}
          />
        </Stack>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Upload"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Upload' }]}
          moreLink={['https://react-dropzone.js.org/#section-basic-example']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
